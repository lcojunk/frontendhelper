// 1. Select all parent containers
const containers = document.querySelectorAll('.github-markdown');

// 2. Iterate through each container
containers.forEach(container => {
    // Find elements specifically within THIS container
    const sourceElement = container.querySelector('.markdown-source');
    const outputContainer = container.querySelector('.markdown-content');

    if (sourceElement && outputContainer) {
        // Extract and clean content
        const rawMarkdown = sourceElement.textContent
            .replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g, '')
            .trim();

        // Render to the local output container
        outputContainer.innerHTML = marked.parse(rawMarkdown);
    }
});
