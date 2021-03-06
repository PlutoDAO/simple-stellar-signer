import type { ITranslation } from './ITranslation';
import WalletLanguageFactory from './WalletLanguageFactory';

export default class WalletLanguage {
    getLanguage(): string {
        const DEFAULT_LANGUAGE = 'en';
        const ISO_639_1_LENGTH = 2;
        return ((navigator.languages && navigator.languages[0] && navigator.language) || DEFAULT_LANGUAGE).substr(
            0,
            ISO_639_1_LENGTH,
        );
    }

    async getText(languageISO?: string): Promise<ITranslation> {
        return await new WalletLanguageFactory().create(languageISO || this.getLanguage());
    }
}
