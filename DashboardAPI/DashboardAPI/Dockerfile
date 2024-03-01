FROM mcr.microsoft.com/dotnet/sdk:8.0 AS base
WORKDIR /app

COPY . ./
RUN dotnet restore
RUN dotnet publish -c Release -o out
RUN mkdir ./out/db

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /runtime-app
COPY --from=base /app/out .

EXPOSE 8080
ENTRYPOINT ["dotnet", "DashboardAPI.dll"]