# file-drops

A simple in-browser file drop utility.


## Usage

```javascript
import fileDrop from 'file-drops';

const element = document.querySelector('#container');

const dropHandler = fileDrop('Drop a file', function(files) {
  // files = [ { name, contents }, ... ]
});

element.addEventListener('dragstart', dropHandler);
```

## Styling

On drop over, the utility will attach a the following overlay to the
container element:

```html
<div class="drop-overlay">
  <div class="box">
    <div class="label">{label}</div>
  </div>
</div>
```

Style it as you wish. :heart:

## License

MIT