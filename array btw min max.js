// create an array of numbres



1. //between min and max(edges included)


const range = (min, max) => {

    return Array.from({
            length: max - min + 1
        },
        (_, i) => {
            return min + i;
        }
    );
}

2. //between min and max(edges excluded)
const range2 = (min, max) => {

    return Array.from({
            length: max - min - 1
        },
        (_, i) => {
            return min + i + 1;
        }
    );
};
rangeE(2, 5)