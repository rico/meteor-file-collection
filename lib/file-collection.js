Collections.files = new FileCollection('files',
  { resumable: false,
    http: [
      { method: 'get',
        path: '/:filename',
        lookup: function (params) {
          return { filename: params.filename };
        }
      }
    ]
  }
);


Collections.files.allow({
  insert: function () {
    return false;
  },
  remove: function () {
    return true;
  },
  read: function (userId, file) {
    return true;
  },
  write: function () {
    return false;
  }
});