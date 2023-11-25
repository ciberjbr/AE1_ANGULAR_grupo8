export class Usuario{

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
    private _nombre: string;
    
    private _contrasena: string;
    
    


    /*
    * Atributo contador del ID del videojuego. Es estático para que su ciclo de vida no dependa 
    * del tiempo de vida de los objetos.
    * La función de este atributo es llevar un contador del atributo "_id"
    * que se asingará en el constructory se autoincrementará automáticamente por cada 
    * objeto videojuego que se cree.
    */
    

    //OJO! Al poner en el constructor los parametros de entrada, se crean automáticamente 
    //los atributos titulo y universo en la clase. Es decir, esta clase tendrá 3 atributos
    //dinamicos y 1 estatico en total.
    constructor(_nombre : string, _contrasena : string){
        
        this._nombre = _nombre;
        this._contrasena = _contrasena;
        
    }

    public get nombre(): string {
        return this._nombre;
    }
    
    public get contraseña(): string {
        return this._contrasena;
    }
    



}