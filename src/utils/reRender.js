async function reRender(component, domElement) {
  document.querySelector(domElement).innerHTML = await component.print();
  if (component.afterRender) {
    await component.afterRender();
  }
}
export default reRender;
