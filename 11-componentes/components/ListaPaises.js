app.component("lista-paises", {
    template: `
        <ol>
            <li>{{ pais }}</li>
        </ol>
    `,
    data: () => ({
        pais: "Colombia"
    })
});