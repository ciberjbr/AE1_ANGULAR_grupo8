export class Videojuego{

    /** 
     * 
     * Los videojuegos tendrán un identificador, un título, una compañía, una imagen y una valoración media.
     * 
    * Los atributos privados se ponen con "_" por convenio
    * Atributo privado que lleva el identificador único del hereo. Solo se
    * permitiá acceder a él con el método get.
    * 
    * 
    */
    private _id : number = 0;
    public titulo : string;
    public compañia : string;
    public imagen : string
    public valoracionMedia : string


    /*
    * Atributo contador del ID del videojuego. Es estático para que su ciclo de vida no dependa 
    * del tiempo de vida de los objetos.
    * La función de este atributo es llevar un contador del atributo "_id"
    * que se asingará en el constructory se autoincrementará automáticamente por cada 
    * objeto videojuego que se cree.
    */
    private static contadorId : number = 1;

    //OJO! Al poner en el constructor los parametros de entrada, se crean automáticamente 
    //los atributos titulo y universo en la clase. Es decir, esta clase tendrá 3 atributos
    //dinamicos y 1 estatico en total.
    constructor(titulo : string, compañia : string, imagen :string, valoracionMedia : string){
        this._id = Videojuego.contadorId++;
        this.titulo = titulo
        this.compañia = compañia
        this.imagen = imagen
        this.valoracionMedia = valoracionMedia
    }

    public get id() : number{
        return this._id;
    }

    public toString() : string {
        return `ID: ${this._id}, titulo: ${this.titulo}, compañia: ${this.compañia}, imagen: ${this.imagen}, valoracionMedia: ${this.valoracionMedia},`
    }

}