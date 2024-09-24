export function setPublicKey(publicKey: string) {
    const publicKeyCsv = `${publicKey}\n`;
    const blob = new Blob([publicKeyCsv], { type: 'text/csv' });



}