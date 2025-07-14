using System;
using System.Data.SQLite;

namespace DatabaseModels
{
    public class DatabaseHelper
    {
        //criação da string de conexão
        private readonly string _connectionString;

        public DatabaseHelper()
        {
            // Defina o caminho do banco de dados SQLite
            _connectionString = @"Data Source=C:\Users\josef\Projetos\To-do App\Backend\db\db_ToDoApp.db; Version=3;";
        }

        //Teste de conexão com o banco de dados
        public void TestConnection()
{
            using (var connection = new SQLiteConnection(_connectionString))
            {
                try
                {
                    connection.Open();
                    Console.WriteLine("Conexão com o banco de dados estabelecida com sucesso.");
                }
                catch (SQLiteException ex)
                {
                    Console.WriteLine($"Erro ao conectar ao banco de dados: {ex.Message}");
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        //Parte de Usuários
        public void Select_Usuarios()
        {
            using (var connection = new SQLiteConnection(_connectionString))
            {
                try
                {
                    connection.Open();
                    //comando em sql aqui com a consulta ou o que vai ser feito
                    string query = "SELECT * FROM tb_Usuario;";

                    //executando o comando
                    using (var command = new SQLiteCommand(query, connection))
                    {
                        using (var reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                //Aqui temos que converter os dados do banco de dados para o tipo que queremos
                                //os campos tem que estar na mesma ordem de criação do banco de dados
                                int id_usuario = reader.GetInt32(0);
                                string apelido = reader.GetString(1);
                                string email = reader.GetString(2);

                                Console.WriteLine($"ID: {id_usuario}, Apelido: {apelido}, Email: {email}");
                            }
                        }
                    }
                }
                catch (SQLiteException ex)
                {
                    Console.WriteLine($"Erro ao executar a consulta: {ex.Message}");
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        //Parte de Tarefas
        public void Select_Tarefas()
        {
            using (var connection = new SQLiteConnection(_connectionString))
            {
                try
                {
                    connection.Open();
                    string query = "SELECT id_atividades, id_usuario, nome, data_prevista, hora_prevista, conclusao FROM tb_Atividades";

                    using (var command = new SQLiteCommand(query, connection))
                    {
                        using (var reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                int id_atividades = reader.GetInt32(0);
                                int id_usuario = reader.GetInt32(1);
                                string nome = reader.GetString(2);
                                DateTime data_prevista = reader.GetDateTime(3);
                                TimeSpan hora_prevista = reader.GetTimeSpan(4);
                                bool conclusao = reader.GetBoolean(5);
                                Console.WriteLine($"ID Atividade: {id_atividades}, ID Usuário: {id_usuario}, Nome: {nome}, Data Prevista: {data_prevista}, Hora Prevista: {hora_prevista}, Conclusão: {conclusao}");
                            }
                        }
                    }
                }
            }
        }
    }
}