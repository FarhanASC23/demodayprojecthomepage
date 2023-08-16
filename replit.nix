{ pkgs }: {
  deps = [
    pkgs.node index.js
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}