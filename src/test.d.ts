declare namespace NodeJS {
  interface Global {
    fetch: Mock<GlobalFetch>;
  }
}
