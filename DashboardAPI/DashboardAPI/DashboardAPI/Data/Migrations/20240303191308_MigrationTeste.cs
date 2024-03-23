using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DashboardAPI.Migrations
{
    /// <inheritdoc />
    public partial class MigrationTeste : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Users",
                table: "Users");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "tb_users");

            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "tb_users",
                newName: "surname");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "tb_users",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "tb_users",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "PasswordSalt",
                table: "tb_users",
                newName: "password_salt");

            migrationBuilder.RenameColumn(
                name: "PasswordHash",
                table: "tb_users",
                newName: "password_hash");

            migrationBuilder.AlterColumn<string>(
                name: "email",
                table: "tb_users",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddPrimaryKey(
                name: "PK_tb_users",
                table: "tb_users",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_tb_users_email",
                table: "tb_users",
                column: "email",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_tb_users",
                table: "tb_users");

            migrationBuilder.DropIndex(
                name: "IX_tb_users_email",
                table: "tb_users");

            migrationBuilder.RenameTable(
                name: "tb_users",
                newName: "Users");

            migrationBuilder.RenameColumn(
                name: "surname",
                table: "Users",
                newName: "Surname");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Users",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "Users",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "password_salt",
                table: "Users",
                newName: "PasswordSalt");

            migrationBuilder.RenameColumn(
                name: "password_hash",
                table: "Users",
                newName: "PasswordHash");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Users",
                table: "Users",
                column: "Id");
        }
    }
}
