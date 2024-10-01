export function camelCaseToNormal(text: string | any) {
  // Agrega un espacio antes de cada letra mayúscula que esté precedida por una minúscula
  const result = text.replace(/([a-z])([A-Z])/g, '$1 $2');
  
  // Convierte la primera letra en mayúscula
  return result.charAt(0).toUpperCase() + result.slice(1);
}