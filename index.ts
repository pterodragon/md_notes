import fs from 'fs'
import path from 'path'
import watch from 'node-watch'
import render from './render'

watch('./md', {recursive: true}, function (event, fp) {
  fs.readFile(fp, {encoding: 'utf-8'}, (err, data) => {
    const res = render(data)
    const dir = path.join('md_out', path.dirname(fp))
    const out_fp = path.join(dir, path.basename(fp, '.md') + '.html')
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, {recursive: true});
    }
    fs.writeFile(out_fp, res, (err) => {
      if (err) console.error(err)
      else {
        console.log('written file to', out_fp)
      }
    })
  })
});
