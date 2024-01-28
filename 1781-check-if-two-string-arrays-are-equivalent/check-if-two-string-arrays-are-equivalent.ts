function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    const join1= word1.join('')
    const join2= word2.join('')

    return join1 === join2
};