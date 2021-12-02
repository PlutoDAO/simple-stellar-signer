import { FeeBumpTransaction, Memo, MemoType, Operation, Transaction, TransactionBuilder } from "stellar-base";
import { app } from "hyperapp";
import html from "hyperlit";
import operationFactory from "./operations/operationFactory";

interface IState {
  memo: String;
  origin: String;
  network: String;
  operations: Operation[];
}

const simpleSigner = app({
  init: (state: IState) => state,
  view: (state) => html`
        <div>
            <div>Memo: ${state.memo}</div>
            <div>Origin: ${state.origin}</div>
            <div>Network: ${state.network}</div>
            ${state.operations.map(operationFactory)}
        </div>`,
  node: document.getElementById("app"),
});

window.addEventListener("message", (event): void => {
  const { data: { xdr, networkPassphrase }, isTrusted } = event;
  if (!xdr || !isTrusted) return;
  const tx = TransactionBuilder.fromXDR(xdr, networkPassphrase);
  handleTransaction(tx, event.origin);
}, false);

function handleTransaction(tx: Transaction<Memo<MemoType>, Operation[]> | FeeBumpTransaction, origin: string): void {
  if (tx instanceof Transaction) {
    simpleSigner({
      memo: tx.memo.value.toString(),
      network: tx.networkPassphrase,
      operations: tx.operations,
      origin: origin,
    });
  }
}
