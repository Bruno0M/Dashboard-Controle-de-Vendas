FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["DashboardAPI/DashboardAPI.csproj", "DashboardAPI/"]
RUN dotnet restore "DashboardAPI/DashboardAPI.csproj"
COPY . .
WORKDIR "/src/DashboardAPI"
RUN dotnet build "DashboardAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DashboardAPI.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DashboardAPI.dll"]