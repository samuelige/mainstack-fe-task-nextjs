export const toCurrency = (value: number | string, currency: string, lang?: string): string | undefined => {
    if (currency) {
        if (currency.toUpperCase() === 'USD') {
            return 'USD' + " " + parseInt(value as string)?.toLocaleString('en-US');
        }
        return new Intl.NumberFormat(lang, { style: 'currency', currency }).format(Number(value));
    }
};