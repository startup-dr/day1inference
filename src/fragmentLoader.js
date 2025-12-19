async function loadFragments() {
    const fragmentElements = Array.from(document.querySelectorAll('[id^="fragment-"]'));
    
    for (const element of fragmentElements) {
        const fragmentName = element.id.replace('fragment-', '');
        const fragmentPath = `fragments/${fragmentName}.html`;
        
        try {
            const response = await fetch(fragmentPath);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const html = await response.text();
            element.innerHTML = html;
        } catch (error) {
            console.error(`Failed to load fragment ${fragmentPath}:`, error);
        }
    }
}

export { loadFragments }
