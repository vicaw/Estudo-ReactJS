class Notas{
    constructor(){
        this.notas = []
        this._inscritos = []
    }

    adicionarNota(nota){
        this.notas.push(nota)
        this.notificar()
    }

    deletarNota(index){
        this.notas.splice(index, 1)
        this.notificar()
    }

    inscrever(func){
        this._inscritos.push(func)
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func)
    }

    notificar(){
        this._inscritos.forEach(func => func(this.notas))
    }

}

export default Notas