const E="Cuenta:",O="Permitir",A="Cantidad:",_="Activo:",T="Activo A:",I="Activo B:",N="Activo que est\xE1 utilizando para pagar:",a="Autorizaci\xF3n: La cuenta est\xE1 autorizada para mantener ordenes, pero no para realizar otras transacciones",n="Autorizaci\xF3n: La cuenta est\xE1 autorizada para realizar transacciones con el activo",o="Balance ID:",R="Reenv\xEDa a:",t="Comprar:",S="Compra de activos:",c="Comprar cantidad:",e="Reclamantes:",s="Borrar banderas:",i="Conectar",P="Data:",r="Descripci\xF3n:",C="Destino:",L="Activo que recibe la cuenta de destino:",U="Cuenta del destino de la inflaci\xF3n:",M="Rechazar",D="ed25519PubpcKey:",d="Error",l="Comisi\xF3n:",H="De:",m="Ir a Conectar",B="Ir a Firmar",G="Ocultar llave",F="Umbral alto:",p="Indicio:",u="Dominio principal:",Y="Est\xE1 autorizado:",V="Est\xE1 autorizado a mantener pasivos:",K="Est\xE1 habilitada la recuperaci\xF3n:",v="L\xEDmite:",W="ID del fondo de liquidez:",b="Cargando...",z="Umbral bajo:",X="Peso maestro:",f="Precio M\xE1ximo:",Q="Cantidad M\xE1xima:",Z="Cantidad m\xE1xima A:",h="Cantidad m\xE1xima B:",x="Tiempo m\xE1ximo:",q="Umbral medio:",g="Cantidad m\xEDnima del activo de destino a recibir:",y="Precio M\xEDnimo:",j="Cantidad m\xEDnima A:",k="Cantidad m\xEDnima B:",w="Tiempo m\xEDnimo:",J="Nombre:",$="Autorizaci\xF3n: La cuenta no est\xE1 autorizada para realizar transacciones con el activo",EE="ID de la Oferta:",OE="Operaci\xF3n:",AE="Combinar cuentas",_E="Establecer l\xEDnea de confianza",TE="Comenzar a patrocinar reservas futuras",IE="Secuencia de Reenv\xEDo",NE="Cambiar l\xEDnea de confianza",aE="Reclamar balance reclamable",nE="Recuperaci\xF3n",oE="Saldo reclamable de recuperaci\xF3n",RE="Crear Cuenta",tE="Crear saldo reclamable",SE="Crear oferta de venta pasiva",cE="Finalizar patrocinio de reservas futuras",eE="Depositar en pool de liquidez",sE="Retirar de pool de liquidez",iE="Administrar oferta de compra",PE="Gestionar datos",rE="Administrar oferta de venta",CE="Path Payment Strict Receive",LE="Path Payment Strict Send",UE="Pago",ME="Eliminar patrocinio de la cuenta",DE="Eliminar patrocinio de saldo reclamable",dE="Eliminar datos de patrocinio",lE="Eliminar el patrocinio del fondo de liquidez",HE="Eliminar patrocinio de oferta",mE="Eliminar patrocinio del firmante",BE="Eliminar patrocinio de la l\xEDnea de confianza",GE="Establecer opciones",FE="Establecer banderas de la l\xEDnea de confianza",pE="Operaci\xF3n de tipo:",uE="Ruta:",YE="preAuthTx:",VE="Precio:",KE="Llave Privada",vE="Volver",WE="Vendedor:",bE="Vender:",zE="Venta de activos:",XE="Secuencia de n\xFAmeros:",fE="Establecer banderas:",QE="sha256Hash:",ZE="Mostrar llave",hE="Firmar",xE="Firma:",qE="Firmas:",gE="Firmante:",yE="Firmar transacci\xF3n con",jE="Cuenta de origen:",kE="ID Patrocinada:",wE="Balance inicial:",JE="L\xEDmites de tiempo:",$E="Transacci\xF3n:",EO="Fideicomitente:",OO="El usuario no est\xE1 conectado",AO="Peso:",_O="Lo sentimos, el XDR es inv\xE1lido",TO="Lo sentimos, no encontramos ning\xFAn XDR";var IO={ACCOUNT:E,ALLOW_TRUST:O,AMOUNT:A,ASSET:_,ASSET_A:T,ASSET_B:I,ASSET_TO_PAY:N,AUTHORIZED_TO_MAINTAIN_ORDERS:a,AUTHORIZED_TO_TRANSACT:n,BALANCE_ID:o,BUMP_TO:R,BUYING:t,BUYING_ASSET:S,BUY_AMOUNT:c,CLAIMANTS:e,CLEAR_FLAGS:s,CONNECT_WITH_PRIVATE_KEY:i,DATA:P,DESCRIPTION:r,DESTINATION:C,DESTINATION_ASSET:L,DESTINATION_INFLATION:U,DISALLOW_TRUST:M,ED5519PUBPCKEY:D,ERROR:d,FEE:l,FROM:H,GO_TO_CONNECT:m,GO_TO_SIGN:B,HIDE_KEY:G,HIGH_THRESHOLD:F,HINT:p,HOME_DOMAIN:u,IS_AUTHORIZED:Y,IS_AUTHORIZED_TO_MAINTAIN_LIABILITIES:V,IS_CLAWBACK_ENABLED:K,LIMIT:v,LIQUIDITY_POOL_ID:W,LOADING:b,LOW_THRESHOLD:z,MASTER_WEIGHT:X,MAXIMUM_PRICE:f,MAX_AMOUNT:Q,MAX_AMOUNT_A:Z,MAX_AMOUNT_B:h,MAX_TIME:x,MEDIUM_THRESHOLD:q,MINIMUM_AMOUNT_DESTINATION_ASSET:g,MINIMUM_PRICE:y,MIN_AMOUNT_A:j,MIN_AMOUNT_B:k,MIN_TIME:w,NAME:J,NOT_AUTHORIZED_TO_TRANSACT:$,OFFER_ID:EE,OPERATION:OE,OPERATION_ACCOUNT_MERGE:AE,OPERATION_ACCOUNT_TRUST:_E,OPERATION_BEGIN_SPONSORING_FUTURE_RESERVES:TE,OPERATION_BUMP_SEQUENCE:IE,OPERATION_CHANGE_TRUST:NE,OPERATION_CLAIM_CLAIMABLE_BALANCE:aE,OPERATION_CLAWBACK:nE,OPERATION_CLAWBACK_CLAIMABLE_BALANCE:oE,OPERATION_CREATE_ACCOUNT:RE,OPERATION_CREATE_CLAIMABLE_BALANCE:tE,OPERATION_CREATE_PASSIVE_SELL_OFFER:SE,OPERATION_END_SPONSORING_FUTURE_RESERVES:cE,OPERATION_LIQUIDITY_POOL_DEPOSIT:eE,OPERATION_LIQUIDITY_POOL_WITHDRAW:sE,OPERATION_MANAGE_BUY_OFFER:iE,OPERATION_MANAGE_DATA:PE,OPERATION_MANAGE_SELL_OFFER:rE,OPERATION_PATH_PAYMENT_STRICT_RECEIVE:CE,OPERATION_PATH_PAYMENT_STRICT_SEND:LE,OPERATION_PAYMENT:UE,OPERATION_REVOKE_ACCOUNT_SPONSORSHIP:ME,OPERATION_REVOKE_CLAIMABLE_BALANCE_SPONSORSHIP:DE,OPERATION_REVOKE_DATA_SPONSORSHIP:dE,OPERATION_REVOKE_LIQUIDITY_POOL_SPONSORSHIP:lE,OPERATION_REVOKE_OFFER_SPONSORSHIP:HE,OPERATION_REVOKE_SIGNER_SPONSORSHIP:mE,OPERATION_REVOKE_TRUSTLINE_SPONSORSHIP:BE,OPERATION_SET_OPTIONS:GE,OPERATION_SET_TRUSTLINE_FLAGS:FE,OPERATION_TYPE:pE,PATH:uE,PREAUTH_TX:YE,PRICE:VE,PRIVATE_KEY:KE,RETURN:vE,SELLER:WE,SELLING:bE,SELLING_ASSET:zE,SEQUENCE_NUMBER:XE,SET_FLAGS:fE,SHA256HASH:QE,SHOW_KEY:ZE,SIGN:hE,SIGNATURE:xE,SIGNATURES:qE,SIGNER:gE,SIGN_TRANSACTION:yE,SOURCE_ACCOUNT:jE,SPONSORED_ID:kE,STARTING_BALANCE:wE,TIME_BOUNDS:JE,TRANSACTION:$E,TRUSTOR:EO,USER_IS_NOT_CONNECTED:OO,WEIGHT:AO,XDR_INVALID:_O,XDR_NOT_PROVIDED:TO};export{E as ACCOUNT,O as ALLOW_TRUST,A as AMOUNT,_ as ASSET,T as ASSET_A,I as ASSET_B,N as ASSET_TO_PAY,a as AUTHORIZED_TO_MAINTAIN_ORDERS,n as AUTHORIZED_TO_TRANSACT,o as BALANCE_ID,R as BUMP_TO,t as BUYING,S as BUYING_ASSET,c as BUY_AMOUNT,e as CLAIMANTS,s as CLEAR_FLAGS,i as CONNECT_WITH_PRIVATE_KEY,P as DATA,r as DESCRIPTION,C as DESTINATION,L as DESTINATION_ASSET,U as DESTINATION_INFLATION,M as DISALLOW_TRUST,D as ED5519PUBPCKEY,d as ERROR,l as FEE,H as FROM,m as GO_TO_CONNECT,B as GO_TO_SIGN,G as HIDE_KEY,F as HIGH_THRESHOLD,p as HINT,u as HOME_DOMAIN,Y as IS_AUTHORIZED,V as IS_AUTHORIZED_TO_MAINTAIN_LIABILITIES,K as IS_CLAWBACK_ENABLED,v as LIMIT,W as LIQUIDITY_POOL_ID,b as LOADING,z as LOW_THRESHOLD,X as MASTER_WEIGHT,f as MAXIMUM_PRICE,Q as MAX_AMOUNT,Z as MAX_AMOUNT_A,h as MAX_AMOUNT_B,x as MAX_TIME,q as MEDIUM_THRESHOLD,g as MINIMUM_AMOUNT_DESTINATION_ASSET,y as MINIMUM_PRICE,j as MIN_AMOUNT_A,k as MIN_AMOUNT_B,w as MIN_TIME,J as NAME,$ as NOT_AUTHORIZED_TO_TRANSACT,EE as OFFER_ID,OE as OPERATION,AE as OPERATION_ACCOUNT_MERGE,_E as OPERATION_ACCOUNT_TRUST,TE as OPERATION_BEGIN_SPONSORING_FUTURE_RESERVES,IE as OPERATION_BUMP_SEQUENCE,NE as OPERATION_CHANGE_TRUST,aE as OPERATION_CLAIM_CLAIMABLE_BALANCE,nE as OPERATION_CLAWBACK,oE as OPERATION_CLAWBACK_CLAIMABLE_BALANCE,RE as OPERATION_CREATE_ACCOUNT,tE as OPERATION_CREATE_CLAIMABLE_BALANCE,SE as OPERATION_CREATE_PASSIVE_SELL_OFFER,cE as OPERATION_END_SPONSORING_FUTURE_RESERVES,eE as OPERATION_LIQUIDITY_POOL_DEPOSIT,sE as OPERATION_LIQUIDITY_POOL_WITHDRAW,iE as OPERATION_MANAGE_BUY_OFFER,PE as OPERATION_MANAGE_DATA,rE as OPERATION_MANAGE_SELL_OFFER,CE as OPERATION_PATH_PAYMENT_STRICT_RECEIVE,LE as OPERATION_PATH_PAYMENT_STRICT_SEND,UE as OPERATION_PAYMENT,ME as OPERATION_REVOKE_ACCOUNT_SPONSORSHIP,DE as OPERATION_REVOKE_CLAIMABLE_BALANCE_SPONSORSHIP,dE as OPERATION_REVOKE_DATA_SPONSORSHIP,lE as OPERATION_REVOKE_LIQUIDITY_POOL_SPONSORSHIP,HE as OPERATION_REVOKE_OFFER_SPONSORSHIP,mE as OPERATION_REVOKE_SIGNER_SPONSORSHIP,BE as OPERATION_REVOKE_TRUSTLINE_SPONSORSHIP,GE as OPERATION_SET_OPTIONS,FE as OPERATION_SET_TRUSTLINE_FLAGS,pE as OPERATION_TYPE,uE as PATH,YE as PREAUTH_TX,VE as PRICE,KE as PRIVATE_KEY,vE as RETURN,WE as SELLER,bE as SELLING,zE as SELLING_ASSET,XE as SEQUENCE_NUMBER,fE as SET_FLAGS,QE as SHA256HASH,ZE as SHOW_KEY,hE as SIGN,xE as SIGNATURE,qE as SIGNATURES,gE as SIGNER,yE as SIGN_TRANSACTION,jE as SOURCE_ACCOUNT,kE as SPONSORED_ID,wE as STARTING_BALANCE,JE as TIME_BOUNDS,$E as TRANSACTION,EO as TRUSTOR,OO as USER_IS_NOT_CONNECTED,AO as WEIGHT,_O as XDR_INVALID,TO as XDR_NOT_PROVIDED,IO as default};
