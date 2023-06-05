export default {
    name: 'vModelObjectMixin',
    props: {
        value: {
            type: Object,
            required: false,
            default: null
        }
    },
    data () {
        return {
            valueModel: null
        }
    },
    watch: {
        value: {
            handler (newValue, oldValue) {
                if (newValue !== oldValue) {
                    this.valueModel = Object.assign({}, this.valueModel, newValue)
                }
            },
            immediate: true
        }
    },
    methods: {
        emitValue () {
            this.$emit('input', this.valueModel)
        },
        emitClear () {
            this.$emit('input', {})
        }
    }
}