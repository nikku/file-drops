# file-drops

A simple in-browser file drop utility.


## Usage

```javascript
import fileDrop from 'file-drops';

const element = document.querySelector('#container');

const dropHandler = fileDrop('Drop a file', function(files) {
  // files = [ { name, contents } ]
});

element.addEventListener('dragstart', dropHandler);
```


## License

MIT