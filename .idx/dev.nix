{ pkgs, ... }: {
  channel = "stable-24.05";

  packages = [
    pkgs.nodejs_20
    pkgs.pnpm
  ];

  env = {};
  idx = {
    extensions = [
      "angular.ng-template"
      "Catppuccin.catppuccin-vsc"
      "Catppuccin.catppuccin-vsc-icons"
    ];

    previews = {
      enable = true;
      previews = {
        web = {
          command = [
            "pnpm" 
            "run" 
            "start" 
            "--port" 
            "$PORT" 
            "--host" 
            "0.0.0.0" 
            "--disable-host-check"
        ];
          manager = "web";
        };
      };
    };

    workspace = {
      onCreate = {
        npm-install = "pnpm i --no-audit --no-progress --timing";
        default.openFiles = [ "src/app/app.component.ts" ];
      };
      onStart = {
      };
    };
  };
}
