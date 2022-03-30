console.warn( document.querySelector('title').textContent);

new Vue({
    el: '#app',
    data: {
        mensaje: 'Soy un mensaje',
        mensajeHTML: '<i>Soy un mensaje</i>',
        valor: 123,
        contador: 123,
        contador2: 456,
        contador3: 789
    },
    methods: {
        saludar(event) { alert('Holaaa!!') },
        incrementar(event) { this.contador3++ },
        mostrarContador3() { return this.contador3}
    },
    computed: {

    }
});