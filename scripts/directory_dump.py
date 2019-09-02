# this script does a dump of all the node information from https://capacity.threefoldtoken.com/
# and populate a BCDB with it.


from Jumpscale import j

from urllib.parse import urlparse


class Converter:
    def __init__(self, bcdb_name):
        self._bcdb = j.data.bcdb.get(bcdb_name)
        self._node_model = self._bcdb.model_get(url="tfgrid.node.2")

    def _load_data(self, path):
        try:
            data = j.data.serializers.json.load(path)
        except j.exceptions.Value:
            data = self._dump_directory(path)
        return data

    def _dump_directory(self, path):
        try:
            cl = j.clients.threefold_directory.new("default")
        except j.exceptions.Base:
            cl = j.clients.threefold_directory.get("default")
        data, _ = cl.api.ListCapacity()
        data_dict = [n.as_dict() for n in data]
        j.data.serializers.json.dump(path, data_dict)
        return data_dict

    def _convert_node(self, data):
        found = self._node_model.find(node_id=data["node_id"])
        if found:
            node = found[0]
        else:
            node = self._node_model.new()

        node.node_id = data["node_id"]
        node.farm_id = data["farmer_id"]
        node.os_version = data["os_version"]
        node.uptime = data["uptime"]
        node.address = urlparse(data["robot_address"]).hostname
        node.location.continent = data["location"]["continent"]
        if data.get("location"):
            node.location.country = data["location"]["country"]
            node.location.city = data["location"]["city"]
            node.location.city = data["location"]["city"]
            node.location.latitude = data["location"]["latitude"]
            node.location.longitude = data["location"]["longitude"]
        if data.get("total_resources"):
            node.total_resource.cru = data["total_resources"]["cru"]
            node.total_resource.mru = data["total_resources"]["mru"]
            node.total_resource.hru = data["total_resources"]["hru"]
            node.total_resource.sru = data["total_resources"]["sru"]
        if data.get("used_resources"):
            node.used_resource.cru = data["used_resources"]["cru"]
            node.used_resource.mru = data["used_resources"]["mru"]
            node.used_resource.hru = data["used_resources"]["hru"]
            node.used_resource.sru = data["used_resources"]["sru"]
        if data.get("reserved_resources"):
            node.reserved_resource.cru = data["reserved_resources"]["cru"]
            node.reserved_resource.mru = data["reserved_resources"]["mru"]
            node.reserved_resource.hru = data["reserved_resources"]["hru"]
            node.reserved_resource.sru = data["reserved_resources"]["sru"]
        return node

    def populate_bcdb(self):
        data = self._load_data("directory.py")
        for n in data:
            node = self._convert_node(n)
            node.save()
            print("%s converted" % node.node_id)


def main():
    converted = Converter("tf_directory")
    converted.populate_bcdb()


if __name__ == "__main__":
    main()
