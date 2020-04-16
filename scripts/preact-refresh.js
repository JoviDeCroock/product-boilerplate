import { options, Component } from 'preact';

// all vnodes referencing a given constructor
const vnodesForComponent = new WeakMap();

export function replaceComponent(oldComponent, newComponent) {
  const vnodes = vnodesForComponent.get(oldComponent);
  if (!vnodes) return;

  // migrate the list to our new constructor reference
  vnodesForComponent.delete(oldComponent);
  vnodesForComponent.set(newComponent, vnodes);
  
  vnodes.forEach(vnode => {
    // update the type in-place to reference the new component
    vnode.type = newComponent;
    // enqueue a render
    const c = vnode.__c || vnode._component;
    if (c) Component.prototype.forceUpdate.call(c);
  });
}

const old = options.vnode;
options.vnode = vnode => {
  const type = vnode.type;
  if (typeof type === 'function') {
    let vnodes = vnodesForComponent.get(type);
    if (!vnodes) {
      vnodesForComponent.set(type, vnodes = new WeakSet());
    }
    vnodes.add(vnode);
  }
};
