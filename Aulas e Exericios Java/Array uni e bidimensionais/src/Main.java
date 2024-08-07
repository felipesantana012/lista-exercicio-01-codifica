//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        int[] idades = {1,2,3,4,5};

        //somar lavores
//        double soma = 0;
//        for (int i = 0; i <idades.length ; i++) {
//            soma +=idades[i];
//        }
//        System.out.println(soma);

        //Reverter o Array
//        int start = 0;
//        int end = idades.length-1;
//        while (start<end){
//            int temp = idades[start];
//            idades[start] = idades[end];
//            idades[end] = temp;
//            start ++;
//            end --;
//        }


        //Adicionar a um novo array

//        int[] novoArray = new int[idades.length];
//            for (int j = 0; j < novoArray.length; j++) {
//                novoArray[j] = idades[j];
//            }
//
//        for (int j = 0; j < novoArray.length; j++) {
//            System.out.println(novoArray[j]);
//        }



        int[][] matrix = {
                {1,2,3},
                {4,5,6},
                {7,8,9}
        };

        int soma = 0;

        for (int[] i : matrix){
            for(int value : i){
                System.out.println(value);
                soma +=value;
            }
            System.out.println("");
        }

        System.out.println(soma);
    }
}