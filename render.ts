import md_ from 'markdown-it'
const md = md_()
import mk from 'markdown-it-katex'
md.use(mk);

export default function render(s: string) {
  return template(md.render(s))
}

const template = (content) => `<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css ">
    <style>
	.markdown-body {
		box-sizing: border-box;
		min-width: 200px;
		max-width: 980px;
		margin: 0 auto;
		padding: 45px;
	}

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
</style>
  </head>
  <body class="markdown-body">
  ${content}
  </body>
</html>
`
