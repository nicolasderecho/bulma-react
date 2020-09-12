export const capitalize = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);
export const dashCase = (string: string): string => string.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
export const camelCase = (string: string): string => string.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });