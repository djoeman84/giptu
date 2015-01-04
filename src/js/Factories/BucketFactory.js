function BucketFactory(Firebase, firebaseRefUrl) {
  var bucketRef = new Firebase(firebaseRefUrl).child('buckets');

  function Bucket() {

  }

  Bucket.fromBucketName = function(bucketName) {
    return new Bucket(bucketName);
  }

  return Bucket;
}

BucketFactory.$inject = ['Firebase', 'firebaseRefUrl'];

angular.module('factories')
  .service('Bucket', BucketFactory);
