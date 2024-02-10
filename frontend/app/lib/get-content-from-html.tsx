function getContentFromHtml(htmlString: string) {
  htmlString = htmlString.toString();
  const theObj = { __html: htmlString };
  return <p dangerouslySetInnerHTML={theObj} className="basis-2/4 ml-auto" />;
}

export default getContentFromHtml;
