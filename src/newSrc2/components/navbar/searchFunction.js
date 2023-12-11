function searchReactTree(node, term) {
	if (!node) {
	  return false;
	}
  
	// Check if the node's content (e.g., text or data) includes the search term
	if (node.type === 'text' && node.props && node.props.children) {
	  const content = node.props.children.toString().toLowerCase();
	  if (content.includes(term.toLowerCase())) {
		return true;
	  }
	}
  
	// Recursively search child components
	if (Array.isArray(node.props?.children)) {
	  for (const child of node.props.children) {
		if (searchReactTree(child, term)) {
		  return true;
		}
	  }
	} else if (typeof node.props?.children === 'object') {
	  if (searchReactTree(node.props.children, term)) {
		return true;
	  }
	}
  
	return false;
  }
  
  export default searchReactTree;