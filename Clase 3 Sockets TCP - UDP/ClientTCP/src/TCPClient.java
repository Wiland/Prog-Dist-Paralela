import java.net.*; //Se importa la libreria java.net
import java.io.*; //Se importa la libreria java.io

//Se declara la clase clientetcp
public class TCPClient {

    //Se declara el método principal main que recibe un parámetro
    public static void main(String argv[]) {

        System.out.println("Tratando de conectar al: " + argv[0] + " puerto: " + argv[1]);
        
        //Si no recibe ningún parámetro dará error
        if (argv.length == 0) {
            System.err.println("java clientetcp servidor");
            System.exit(1);
        }
        System.out.println("CLIENTE");

        // Se guarda en el buffer un valor introducido por pantalla  
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));

        Socket socket = null; //Se crea un objeto de tipo socket
        InetAddress address; //Se crea un objeto de tipo InetAddress
        String mensaje = ""; //Se declara una variable de tipo string

        try {
            //Se abre una excepción
            //Obtiene el nombre de la dirección remota del socket
            address = InetAddress.getByName(argv[0]);

            try {
                socket = new Socket(address, Integer.parseInt(argv[1])); //Se crea un objeto de tipo socket 
                //para establecer una conexión por el puerto 6001
            } catch (NumberFormatException nfe) {
                System.err.println("El argumento argv[1] no es un numero");
                System.exit(1);
            }

            //Se declara un objeto de tipo DataOutputStream para mandar valores al servidor 
            DataOutputStream out
                    = new DataOutputStream(socket.getOutputStream());

            //Se declara un objeto de tipo DataOutputStream para mandar obtener al servidor
            DataInputStream in2
                    = new DataInputStream(socket.getInputStream());

            //Mandamos la palabra Hola al servidor
            out.writeUTF("Hola");
            //Recogemos lo que nos devuelve el servidor y lo guardamos en la variable mensaje
            mensaje = in2.readUTF();
            System.out.println(mensaje); //Imprime el contenido de mensaje

            do {
                //Mientras el mensaje no sea fin seguira leyendo
                mensaje = in.readLine();
                out.writeUTF(mensaje);
                //System.out.println(mensaje); //Imprime el contenido de mensaje            
                //NUEVO
                mensaje = ""; //Se inicializa la variable de string mensaje a vacío
                mensaje = in2.readUTF();
                System.out.println(mensaje); //Imprime el contenido de mensaje
                //NUEVO            
            } while (!mensaje.startsWith("fin"));
        } catch (Exception e) {
            System.err.println(e.getMessage());
            System.exit(1);
        }
    }
}
