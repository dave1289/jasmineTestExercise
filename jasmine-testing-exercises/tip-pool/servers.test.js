const table = document.querySelector('#serverTable')

describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toBe('Alice');
  });
});

describe('updating server table', function() {
  beforeEach(function () {
    serverNameInput.value = 'test';
    submitServerInfo();
})
it('tests server table update', function() {
    updateServerTable();
    let check = document.querySelector('#serverTable td').textContent
    expect(check).toBe('test');
  })
});

afterEach(function() {
  allServers = {}
  while(serverTable.rows.length > 1){
    serverTable.deleteRow(1);
  }
  });

