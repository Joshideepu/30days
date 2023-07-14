function getUniqueEntriesWithOldestIndividual(entries){
    const uniqueMarks = new Set();
    const uniqueEntries = [];

    for (const entry of entries){
        if (!uniqueMarks.has(entry.mark)){
            uniqueMarks.add(entry.mark);
            uniqueEntries.push(entry);
        } else{
            const existingEntry = uniqueEntries.find((e) => e.mark === entry.mark);
            if(existingEntry.age > entry.age){
                const index = uniqueEntries.indexOf(existingEntry);
                uniqueEntries[index] = entry;
            }
        }
    }
    return uniqueEntries;
}