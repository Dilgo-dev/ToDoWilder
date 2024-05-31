document.addEventListener('DOMContentLoaded', () => {
    const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6'];
    const container = document.querySelector('.radio-input');

    colors.forEach(color => {
        const wrapper = document.createElement('div');
        wrapper.className = 'radio-wrapper';
        wrapper.setAttribute('data-color', color);

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'color';
        input.id = color;
        input.value = color;
        if (color === 'color-1') {
            input.checked = true;
        }

        const label = document.createElement('label');
        label.setAttribute('for', color);

        const span = document.createElement('span');
        const svg = `
        <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <g stroke-width="0"></g>
          <g stroke-linejoin="round" stroke-linecap="round"></g>
          <g id="Interface / Check">
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path>
          </g>
        </svg>
      `;
        span.innerHTML = svg;

        label.appendChild(span);
        wrapper.appendChild(input);
        wrapper.appendChild(label);
        container.appendChild(wrapper);
    });
});
