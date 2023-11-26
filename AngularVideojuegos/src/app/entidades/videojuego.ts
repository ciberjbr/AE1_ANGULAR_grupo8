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
    private _id: number = 0;
    
    private _titulo: string;
   
    private _compañia: string;
    
    private _imagen: string;
    
    private _valoracionMedia: string;
    


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
    constructor(id : number , titulo : string, compañia : string, imagen :string, valoracionMedia : string){
        this._id = id
        this._titulo = titulo
        this._compañia = compañia
        this._imagen = imagen
        this._valoracionMedia = valoracionMedia
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }
    public get compañia(): string {
        return this._compañia;
    }
    public set compañia(value: string) {
        this._compañia = value;
    }
    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }
    public get valoracionMedia(): string {
        return this._valoracionMedia;
    }
    public set valoracionMedia(value: string) {
        this._valoracionMedia = value;
    }
    public toString() : string {
        return `ID: ${this._id}, titulo: ${this.titulo}, compañia: ${this.compañia}, imagen: ${this.imagen}, valoracionMedia: ${this.valoracionMedia},`
    }

}