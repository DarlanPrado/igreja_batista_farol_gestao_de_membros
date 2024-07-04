<template>
    <UModal v-model="showModal" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <h2 class="text-center text-xl">Relatório do membro</h2>
        </template>
            <div class="flex flex-col mx-5">
              <p class="mb-1"><strong>Nome completo: </strong>{{ state.nome }}</p>
              <p class="mb-1"><strong>Data de nascimento: </strong>{{ state.data_nascimento }}</p>
              <p class="mb-1"><strong>Estado civil: </strong>{{ state.Estado_civil }}</p>
              <p class="mb-1"><strong>Telefone/Celular: </strong>{{ state.telefone }}</p>
              <p class="mb-1"><strong>Cidade: </strong>{{ state.cidade }}</p>
              <p class="mb-1"><strong>Bairro: </strong>{{ state.bairro }}</p>
              <p class="mb-1"><strong>Ingresso em: </strong>{{ state.data_ingresso }}</p>
              <p><strong>Batizado: </strong>{{ state.bl_batizado }}</p>
            </div>
        <template #footer>
          <div class="flex justify-around mx-14">
            <UButton @click="downloadPDF()" class="">Baixar</UButton>
            <UButton @click="showModal = false" class="">Fechar</UButton>
          </div>
        </template>
      </UCard>
    </UModal>
  </template>
  
<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import type { MembroData } from '~/types/stores/membros';
import { useMembroStore } from '~/stores/membros'
import jsPDF from 'jspdf';

const props = defineProps<{ idMembro: number | null }>();
const showModal = defineModel({required: true})

const membro = ref<MembroData | undefined>(undefined);
  

const state = reactive({
    nome: '',
    data_nascimento: undefined as Date | undefined,
    Estado_civil: undefined as number | undefined,
    telefone: '',
    cidade: '',
    bairro: '',
    data_ingresso: undefined as Date | undefined,
    bl_batizado: false,
    bl_ativo: false
});

watch(() => props.idMembro, (newId) => {
    if (newId !== null) {
        membro.value = useMembroStore().getMembroDataById(newId);
        if (membro.value) {
            const endereco = membro.value.id_endereco ? useMembroStore().getEnderecoById(membro.value.id_endereco) : undefined;
            state.nome = membro.value.nome || '';
            state.data_nascimento = membro.value.data_nascimento;
            state.Estado_civil = membro.value.id_estado_civil;
            state.telefone = membro.value.celular || '';
            state.cidade = endereco?.cidade.nome || '';
            state.bairro = endereco?.bairro.nome || '';
            state.data_ingresso = membro.value.data_ingresso;
            state.bl_batizado = membro.value.bl_batizado;
            state.bl_ativo = membro.value.bl_ativo;
        } else {
            state.nome = '';
            state.data_nascimento = undefined;
            state.Estado_civil = undefined;
            state.telefone = '';
            state.cidade = '';
            state.bairro = '';
            state.data_ingresso = undefined;
            state.bl_batizado = false;
            state.bl_ativo = false;
        }
    }
}, { immediate: true });

const downloadPDF = () => {
  const logo = new Image();
  const doc = new jsPDF();

  logo.src = '';
  doc.addImage(logo, 'PNG', 10, 10, 30, 30);
  doc.setFontSize(12);
  doc.setTextColor('#333333');

  const titleText = 'Relatório do Membro';
  const titleFontSize = 16;
  const titleX = doc.internal.pageSize.getWidth() / 2;
  const titleY = 50;
  doc.setFontSize(titleFontSize);
  doc.text(titleText, titleX, titleY, { align: 'center' });
  doc.text('-----------------------', titleX, titleY + 5, { align: 'center' });

  doc.setFontSize(12);
  doc.text(`Nome completo: ${state.nome}`, 10, 75);
  doc.text(`Data de nascimento: ${state.data_nascimento}`, 10, 85);
  doc.text(`Estado civil: ${state.Estado_civil}`, 10, 95);

  doc.setFontSize(16);
  doc.text('Endereço', titleX, 105, { align: 'center' });
  doc.text('---------', titleX, 110, { align: 'center' });

  doc.setFontSize(12);
  doc.text(`Cidade: ${state.cidade}`, 10, 120);
  doc.text(`Bairro: ${state.bairro}`, 10, 130);

  doc.setFontSize(16);
  doc.text('Outras informações', titleX, 140, { align: 'center' });
  doc.text('--------------------', titleX, 145, { align: 'center' });

  doc.setFontSize(12);
  doc.text(`Telefone/Celular: ${state.telefone}`, 10, 155);
  doc.text(`Ingresso em: ${state.data_ingresso}`, 10, 165);
  doc.text(`Batizado: ${state.bl_batizado ? 'Sim' : 'Não'}`, 10, 175);

  doc.save('membro.pdf');
};

</script>