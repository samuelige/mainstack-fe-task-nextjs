export const dayandmonth = (value: string): string => {
    const date = new Date(value);
    return date.toLocaleString("en-US", { day: "numeric", month: "long", year: "numeric"});
};