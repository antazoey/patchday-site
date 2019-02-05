# PatchDay Support Site

My portfolio website on Google Cloud Kit.

Remember that containers are called 'Buckets' in google cloud.

Go into build directory

    cd build

    gcloud init

Set permissions (if you haven't done so):

    gsutil acl ch -u AllUsers:R gs://www.patchdayhrt.com
    gsutil defacl set public-read gs://www.patchdayhrt.com

Upload:

    gsutil rsync -R . gs://www.patchdayhrt.com

Set Pages:

    gsutil web set -m index.html -e 404.html gs://www.patchdayhrt.com

[Go to site](http://www.patchdayhrt.com)
