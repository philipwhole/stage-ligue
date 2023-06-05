export default {
    name: 'vModelNumberMixin',
    props: {
        value: {
            type: Number,
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
                    this.valueModel = newValue
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
            this.$emit('input', 0)
        }
    }
}