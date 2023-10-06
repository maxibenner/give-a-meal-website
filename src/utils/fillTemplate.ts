/**
 * Fills a template string with data.
 * @param template A template string. %d will be replaced with the data passed to the function.
 * @param data 
 * @returns Filled template string.
 */
export default function fillTemplate(template: string, data: any) {
    return template.replaceAll("%d", data);
}