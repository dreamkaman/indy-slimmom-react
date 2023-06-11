type AddDimensionFunction = (count: string | number, dimensionName: 'kcal' | 'g') => string;

export const addDimension: AddDimensionFunction = (count, dimensionName) => {
    return `${count} ${dimensionName}`;
}