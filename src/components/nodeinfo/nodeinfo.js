export default {
  name: 'nodeinfo',
  props: ['node'],
  data () {
    const { id, uptime, version, totalResources, status: nodeStatus, updated } = this.node
    const { cru, mru, sru, hru } = totalResources
    return {
      value: {
        id,
        uptime,
        version,
        cru,
        mru,
        sru,
        hru,
        status: nodeStatus.status,
        updated
      }
    }
  }
}
