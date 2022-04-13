console.warn( document.querySelector('title').textContent);

Vue.component('contador', {
    data() {
        return {
            cont: this.init || 0,
        }
    },
    props: ['init'],
    methods: {
        contar() {
            this.cont++
        }
    },
    template: `
    <span>
        <button class="btn btn-success my-2 mr-2" @click="contar()" > contador {{ cont}} </button>
    </span>
    `
})

new Vue({
    el: '#app',
    data: {
        mensaje: 'Soy un mensaje',
        mensajeHTML: '<i>Soy un mensaje</i>',
        valor: 123,
        contador: 123,
        contador2: 456,
        contador3: 789,
        mostrar: true,
        mostrar2: true,
        usuarios: ['Juan', 'Pedro', 'María', 'Esther', 'Haman'],
        alumnos: [
            {nombre: 'Juan', apellido: 'Perez', edad: 32, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png'},
            {nombre: 'Pedro', apellido: 'Raggio', edad: 32, curso: true, foto: 'https://www.iconfinder.com/icons/2754580/woman_business_woman_avatar_female_icon'},
            {nombre: 'María', apellido: 'Ramos', edad: 32, curso: false, foto: 'https://www.iconfinder.com/icons/2754576/woman_female_avatar_icon'},
            {nombre: 'Esther', apellido: 'Buessi', edad: 32, curso: true, foto: 'https://www.iconfinder.com/icons/2754579/business_man_man_avatar_icon'},
        ],
    },
    methods: {
        saludar(event) { alert('Holaaa!!') },
        incrementar(event) { this.contador3++ },
        mostrarContador3() { return this.contador3},
        agregarAlumno() {
            const alumno = {
                nombre: 'pipo',
                apellido: 'peluso',
                edad: 35,
                curso: false,
                foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png'
            }
            this.alumnos.push(alumno)
        },
    },
    computed: {
        calcularAlunosCurso() {
            let cant = 0
            this.alumnos.forEach( alumno => {
                if(alumno.curso) cant++
            })
            return {
                cant: cant,
                total: this.alumnos.length
            }
        }
    }
});