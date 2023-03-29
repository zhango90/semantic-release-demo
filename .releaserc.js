exports.default = {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "master",
    "next",
    {
      name: "beta",
      prerelease: true
    },
    {
      name: "feature/*",
      prerelease: `${this.name.replace(/^feature\\/ / g, "")}`
    }
  ]
};
