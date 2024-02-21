<template>
  <div id="paypal-button-container" />
</template>

<script>
paypal.Buttons({
  style: {
    shape: 'pill',
    color: 'blue',
    layout: 'vertical',
    label: 'subscribe',
  },
  createSubscription: function(data, actions) {
    return actions.subscription.create({
      plan_id: 'P-8GL91717W4466305WMXLGEII',
    });
  },
  onApprove: function(data) {
    alert(data.subscriptionID);
  },
}).render('#paypal-button-container');
</script>
