<template>
  <div class="hello">
    <p>
      Alligator Name:
      <span>{{hello}}</span>
      <button @click="updateName">Update Name</button>
    </p>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'HelloWorld',
  data () {
    return {
      hello: ''
    }
  },
  apollo: {
    hello: gql`{hello}`
  },
  methods: {
    updateName () {
      this.$apollo.mutate({
        mutation: gql`
          mutation ($name: String!) {
            RootMutationType(name: $name)
          }
        `,
        variables: { name: this.temporaryName }
      }).then(mutationResult => {
        // Do stuff with the result.
        console.log(`The Alligator's updated name is: ${mutationResult.data.updateAlligatorName}`)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
