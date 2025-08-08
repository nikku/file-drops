declare type File = {
  name: string,
  path: string | undefined,
  contents: string
};

export type DropFn = (files: File[], dropEvent: DragEvent) => void;

export type DragOverHandler = (event: DragEvent) => any;


/**
 * Add file drop functionality to the given element,
 * calling fn(files...) on drop.
 *
 * @example
 *
 * var node = document.querySelector('#container');
 *
 * var dragOverHandler = fileDrop(handleFiles);
 *
 * node.addEventListener('dragover', dragOverHandler);
 *
 * @param label
 * @param fn
 *
 * @return drag over handler
 */
declare function fileDrop(label: string, fn: DropFn) : DragOverHandler;

/**
 * Add file drop functionality to the given element,
 * calling fn(files...) on drop.
 *
 * @example
 *
 * var node = document.querySelector('#container');
 *
 * var dragOverHandler = fileDrop(handleFiles);
 *
 * node.addEventListener('dragover', dragOverHandler);
 *
 * @param fn
 *
 * @return drag over handler
 */
declare function fileDrop(fn: DropFn) : DragOverHandler;

export default fileDrop;