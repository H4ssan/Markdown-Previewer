class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder };

    this.updatePreview = this.updatePreview.bind(this);
  }

  updatePreview(event) {
    this.setState({
      markdown: event.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { id: "title" }, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { id: "editor-heading" }, "Editor"), /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        rows: "20",
        cols: "50",
        onChange: this.updatePreview },

      this.state.markdown)), /*#__PURE__*/


      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { id: "preview-heading" }, "Preview"), /*#__PURE__*/
      React.createElement("div", {
        id: "preview",
        dangerouslySetInnerHTML: {
          __html: marked(this.state.markdown) } }))));





  }}


let placeholder = `
# Welcome to my page! 
## Take a look around  
  
 [Visit my portfolio]("https://github.com/H4ssan")
 
 This is inline code - \`<div>Hey</div>\`
 
  
  
  \`\`\`
  // This is a block of code
  
var add2 = function(number) {
  return number + 2;
}
  \`\`\`
 
  This is a list!
  1. list item 1
  1. list item 2
  1. list item 3
  
  > This is a Block Quote!
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

 **Thanks for viewing my project!** `;

ReactDOM.render( /*#__PURE__*/React.createElement(MarkdownPreviewer, null), document.getElementById("root"));